export default function SMCInclusion() {
    return (
        `<section>
            <h4>Stormwater Control Measures</h4>
            <h5>100 year flood event</h5>
            <ul style="font-size: 15px;">
                <li>One hour duration</li>
                <li>2 minute intervals</li>
                <li>USGS NED 1/3 arc-second (~3m)</li>
                <li>NLCD 2019 land cover</li>
                <li>City of Raleigh stormwater infrastructure</li>
            </ul>
            <img src="3m-carved-vs-uncarved_naip_3in_min_depth.gif" alt="Depth of water over the landscape" style="width: 100%; height: auto;">
            <p style="font-size: 12px;">Source: <a href="https://openplains.com">OpenPlains</a></p>
        </section>`
    )
}