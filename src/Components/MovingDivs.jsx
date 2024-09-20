import React from 'react';
import './MovingDivs.css';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const InfiniteCarousel = () => {
    return (
        <div className="carousel-container features">
            <div className="carousel-wrapper ">
                <div className="carousel-item first">
                    <h5>Upto 7% points <FaArrowTrendUp className='logo'/></h5>
                    <p>Increase in cash flow</p>
                </div>

                <div className="carousel-item feature second">
                    <h5>5%-20% < FaDollarSign className='logo'/></h5>
                    <p>In raw material cost</p>
                </div>

                <div className="carousel-item feature third">
                    <h5>10%-25% <FaGlobe className='logo'/></h5>
                    <p>Lower Shipping cost</p>
                </div>

                <div className="carousel-item first">
                    <h5>Upto 7% points <FaArrowTrendUp className='logo'/></h5>
                    <p>Increase in cash flow</p>
                </div>

                <div className="carousel-item feature second">
                    <h5>5%-20%  < FaDollarSign className='logo'/></h5>
                    <p>In raw material cost</p>
                </div>

                <div className="carousel-item feature third">
                    <h5>10%-25%  <FaGlobe className='logo'/></h5>
                    <p>Lower Shipping cost</p>
                </div>

                <div className="carousel-item first">
                    <h5>Upto 7% points <FaArrowTrendUp className='logo'/></h5>
                    <p>Increase in cash flow</p>
                </div>

                <div className="carousel-item feature second">
                    <h5>5%-20%  < FaDollarSign className='logo'/></h5>
                    <p>In raw material cost</p>
                </div>

                <div className="carousel-item feature third">
                    <h5>10%-25%   <FaGlobe className='logo'/></h5>
                    <p>Lower Shipping cost</p>
                </div>

                <div className="carousel-item first">
                    <h5>Upto 7% points <FaArrowTrendUp className='logo'/></h5>
                    <p>Increase in cash flow</p>
                </div>

                <div className="carousel-item feature second">
                    <h5>5%-20%  < FaDollarSign className='logo'/></h5>
                    <p>In raw material cost</p>
                </div>

                <div className="carousel-item feature third">
                    <h5>10%-25%  <FaGlobe className='logo'/></h5>
                    <p>Lower Shipping cost</p>
                </div>

                


              
            
            </div>
        </div>
    );
};

export default InfiniteCarousel;

