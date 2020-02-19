﻿using System.Collections.Generic;
using System.Linq;
using GeneralAlgorithms.DataStructures.Common;
using MapGeneration.Core.MapDescriptions;
using MapGeneration.Interfaces.Core.MapDescriptions;
using MapGeneration.Interfaces.Core.MapLayouts;

namespace MapGeneration.Utils.Statistics
{
    public static class LayoutsDistance
    {
        public static double PositionOnlyDistance<TNode>(IMapLayout<TNode> layout1, IMapLayout<TNode> layout2)
        {
            var nodeToRoom1 = layout1.Rooms.Where(x => !x.IsCorridor).ToDictionary(x => x.Node, x => x.Shape + x.Position);
            var nodeToRoom2 = layout2.Rooms.Where(x => !x.IsCorridor).ToDictionary(x => x.Node, x => x.Shape + x.Position);
            var distances = new List<double>();

            var minX1 = nodeToRoom1.Values.Min(x => x.BoundingRectangle.A.X);
            var minY1 = nodeToRoom1.Values.Min(x => x.BoundingRectangle.A.Y);
            var minX2 = nodeToRoom2.Values.Min(x => x.BoundingRectangle.A.X);
            var minY2 = nodeToRoom2.Values.Min(x => x.BoundingRectangle.A.Y);

            foreach (var node in nodeToRoom1.Keys)
            {
                var shape1Center = nodeToRoom1[node].BoundingRectangle.Center - new IntVector2(minX1, minY1);
                var shape2Center = nodeToRoom2[node].BoundingRectangle.Center - new IntVector2(minX2, minY2);
                
                distances.Add(IntVector2.ManhattanDistance(shape1Center, shape2Center));
            }

            return distances.Average();
        }

        public static double PositionAndShapeDistance<TNode>(IMapLayout<TNode> layout1, IMapLayout<TNode> layout2, double differentShapePenalty)
        {
            var nodeToRoomShape1 = layout1.Rooms.Where(x => !x.IsCorridor).ToDictionary(x => x.Node, x => (x.Shape, x.RoomTemplate));
            var nodeToRoomShape2 = layout2.Rooms.Where(x => !x.IsCorridor).ToDictionary(x => x.Node, x => (x.Shape, x.RoomTemplate));

            var differentShapeCounter = 0;
            foreach (var node in nodeToRoomShape1.Keys)
            {
                if (!Equals(nodeToRoomShape1[node].Shape, nodeToRoomShape2[node].Shape) || !Equals(nodeToRoomShape1[node].RoomTemplate, nodeToRoomShape2[node].RoomTemplate))
                {
                    differentShapeCounter++;
                }
            }

            var distance = PositionOnlyDistance(layout1, layout2);

            if (differentShapeCounter / (double) nodeToRoomShape1.Keys.Count > 2/3d)
            {
                // distance += (differentShapeCounter - nodeToRoomShape1.Keys.Count / 2) * differentShapePenalty / nodeToRoomShape1.Keys.Count;
                distance = double.MaxValue;
            }

            return distance;
        }

        public static double GetAverageRoomTemplateSize<TNode>(IMapDescription<TNode> mapDescription)
        {
            var roomTemplates = mapDescription
                .GetGraph()
                .Vertices
                .Select(mapDescription.GetRoomDescription)
                .Where(x => x is BasicRoomDescription)
                .SelectMany(x => x.RoomTemplates)
                .Distinct()
                .ToList();

            var averageSize = roomTemplates
                .Select(x => x.Shape.BoundingRectangle.Width + x.Shape.BoundingRectangle.Height)
                .Average();

            return averageSize;
        }
    }
}