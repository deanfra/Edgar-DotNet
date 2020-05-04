﻿using System;
using System.Windows.Forms;
using GUI;
using MapGeneration.Simplified;

namespace Sandbox.Features
{
    public class SimpleApi
    {
        public void Run()
        {
            var generator = new SimpleDungeonGenerator();
            // var layout = generator.GenerateLayout();

            generator.InjectRandomGenerator(new Random(0));

            var settings = new GeneratorSettings
            {
                LayoutGenerator = generator,

                NumberOfLayouts = 100,

                ShowPartialValidLayouts = true,
                ShowPartialValidLayoutsTime = 50,

                ShowPerturbedLayouts = true,
                ShowPerturbedLayoutsTime = 1000,

                ShowFinalLayouts = true,

                ShowRoomNames = false,
                // UseOldPaperStyle = true,
                FixedPositionsAndScale = true,
                FixedPositionsAndScaleValue = 15,
            };

            Application.Run(new GeneratorWindow(settings));
        }
    }
}