// importing modules 
import { useState } from "react";
import "./filter.scss";
import TuneIcon from '@mui/icons-material/Tune';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Product from "../../data/product.json";
import CloseIcon from '@mui/icons-material/Close';

// components 
const Filter = () => {

    // filter opening state 
    const [openFilter, setOpenFilter] = useState(false);

    // function to handle filter drawer opening 
    const handleOpenFilter = () => {
        setOpenFilter((prev) => {
            return !prev;
        })
    }

    // ratings array 
    const ratings = [1, 2, 3, 4, 5];

    return (
        <div id="filter">
            {/* filter open button */}
            <button onClick={handleOpenFilter}><TuneIcon /></button>
            <Drawer
                open={openFilter}
                onClose={handleOpenFilter}
                anchor="left"
            >
                <div className="filterBox">
                    {/* filter close button */}
                    <span className="cancelButton" onClick={handleOpenFilter}><CloseIcon /></span>
                    {/* categories accordion  */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 className="filterType">Categories</h3>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexDirection: "column", gap: "15px" }}>
                            {
                                Product.categories.map((item, index) => {
                                    return <span key={index} className="filterItem">
                                        <input type="checkbox" name={item.label} />
                                        <label htmlFor={item.value}>{item.label}</label>
                                    </span>
                                })
                            }
                        </AccordionDetails>
                    </Accordion>
                    {/* brands accordion */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 className="filterType">Brands</h3>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexDirection: "column", gap: "15px" }}>
                            {
                                Product.brands.map((item, index) => {
                                    return <span key={index} className="filterItem">
                                        <input type="checkbox" name={item.label} />
                                        <label htmlFor={item.value}>{item.label}</label>
                                    </span>
                                })
                            }
                        </AccordionDetails>
                    </Accordion>
                    {/* Price */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 className="filterType">Price</h3>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexDirection: "column", gap: "15px" }}>
                            <span className="filterItem">
                                <input type="checkbox" name="low-to-high" />
                                <label htmlFor="low-to-high">Low to High</label>
                            </span>
                            <span className="filterItem">
                                <input type="checkbox" name="high-to-low" />
                                <label htmlFor="high-to-low">High to Low</label>
                            </span>
                        </AccordionDetails>
                    </Accordion>
                    {/* Ratings */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 className="filterType">Ratings</h3>
                        </AccordionSummary>
                        <AccordionDetails sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexDirection: "column", gap: "15px" }}>
                            {
                                ratings.map((item, index) => {
                                    return <span key={index} className="filterItem">
                                        <input type="checkbox" name={item} />
                                        <label htmlFor={item}>{item} Star</label>
                                    </span>
                                })
                            }
                            <span className="filterItem">
                                <input type="checkbox" name="low-to-high" />
                                <label htmlFor="low-to-high">Low to High</label>
                            </span>
                            <span className="filterItem">
                                <input type="checkbox" name="high-to-low" />
                                <label htmlFor="high-to-low">High to Low</label>
                            </span>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Drawer>
        </div>
    )
}

export default Filter
