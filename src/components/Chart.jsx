import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef, useState, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import ColorModeContext from '../theme/ColorModeContext'

const ChartComponent = props => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        if (window.innerWidth < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    
        // Attach event listener to window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // Empty dependency array to run the effect only once
    

    const data = [
        { time: '2018-12-22', value: 22.67 },
        { time: '2018-12-23', value: 22.68 },
        { time: '2018-12-24', value: 23.92 },
        { time: '2018-12-25', value: 25.46 },
        { time: '2018-12-26', value: 28.89},
        { time: '2018-12-27', value: 25.17 },
        { time: '2018-12-28', value: 27.32 },
        { time: '2018-12-29', value: 27.02 },
        { time: '2018-12-30', value: 31.11},
        { time: '2018-12-31', value: 32.51 },
    ];
        
    var themeColors = {};

    if (theme.palette.mode === 'dark') {
        themeColors = {
            primary: theme.palette.dark.primary.main,
            secondary: theme.palette.dark.secondary.main,            
        }
    } else {
        themeColors = {
            primary: theme.palette.light.primary.main,
            secondary: theme.palette.light.secondary.main,            
        }
    }

    const colors = {
        backgroundColor: theme.palette.background.default,
        lineColor: themeColors.primary,
        textColor: theme.palette.text.primary,

    }

    const chartContainerRef = useRef();
    
    
	useEffect(
		() => {
			const handleResize = () => {
				//chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
                    background: {
                        type: 'solid',
                        color: colors.backgroundColor,
                    },
                    lineColor: colors.backgroundColor,
                    textColor: colors.textColor,                    
                },
                watermark: {
                    color: 'rgba(0, 0, 0, 0)',
                },
                crosshair: {
                    color: '#758696',
                },
                grid: {
                    vertLines: {
                        color: colors.backgroundColor,
                    },
                    horzLines: {
                        color: colors.backgroundColor,
                    },
                },
				width: isMobile? windowWidth - 20 : windowWidth - 100,
				height: 300,
            });

			chart.timeScale().fitContent();

			const newSeries = chart.addAreaSeries({ 
                lineColor: themeColors.primary, 
                topColor: themeColors.primary, 
                bottomColor: colors.backgroundColor,                 
            });

            newSeries.setData(data);
                        
            chart.priceScale('right').applyOptions({
                borderVisible: false
            });
            chart.timeScale().applyOptions({
                borderVisible: false
            });
                            
			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
				chart.remove();
			};
		},
		[data, colors.backgroundColor, colors.lineColor, colors.textColor, colors.areaTopColor, colors.areaBottomColor, colors.backgroundColor]
	);

	return (        
		<div ref={chartContainerRef} />					        
	);
};

export default ChartComponent