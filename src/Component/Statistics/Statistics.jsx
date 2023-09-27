import React from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const cards = useLoaderData();
    const totalCard = cards.length;
    

    const donateItem = JSON.parse(localStorage.getItem('donate'));

    const myDonation = ((donateItem && donateItem.length) ?? 0) / totalCard * 100;
    
    const remainPercentage = 100 - myDonation;

    const data1 = [
        ["Donation", "Percentage"],
        ["My Donation", myDonation],
        ["Total Donation", remainPercentage]
    ];

    return (
        <Chart
            chartType="PieChart"
            data={data1}
            width={"100%"}
            height={"400px"}
        />
    );
};

export default Statistics;
