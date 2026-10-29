import "leaflet/dist/leaflet.css";
import { CiLocationOn } from "react-icons/ci";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import SectionTitle from "../../Common/SectionTitle";

const Maps = () => {
    const positions = [
        [32.632855713279916, 51.66574639621575],
        [32.63200556782671, 51.65851119566892],
    ];

    return (
        <div className="my-10 space-y-10">
            <div className="space-y-10">
                <MapContainer
                    className="w-full h-[500px]"
                    center={positions[0]}
                    zoom={13}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={positions[0]}>
                        <Popup>دفتر شاپینو - شعبه چهارباغ</Popup>
                    </Marker>
                </MapContainer>

                <div>
                    <SectionTitle text="شعبه اول:" />
                    <div className="flex-ic mt-5 text-xl text-neutral-600 font-bold gap-2">
                        <CiLocationOn />
                        <p>اصفهان ،  خیابان چهارباغ پایین و ...</p>
                    </div>
                </div>
            </div>

            <div className="space-y-10">
                <MapContainer
                    className="w-full h-[500px]"
                    center={positions[1]}
                    zoom={13}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={positions[1]}>
                        <Popup>دفتر شاپینو - شعبه توحید</Popup>
                    </Marker>
                </MapContainer>

                <div>
                    <SectionTitle text="شعبه دوم:" />
                    <div className="flex-ic mt-5 text-xl text-neutral-600 font-bold gap-2">
                        <CiLocationOn />
                        <p>اصفهان ، خیابان توحید و ...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maps;
