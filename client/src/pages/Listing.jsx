import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

export default function Listing() {
  SwiperCore.use(Navigation);
  const [listing, setListing] = useState({});
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const listingId = params.listingId;
        const res = await fetch(`/api/listing/get/${listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          console.log(data.message);
          return;
        }
        setListing(data);
      } catch (error) {
        setError(true);
        console.error("Error fetching listing:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  // console.log(listing);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!.</p>
      )}
      {listing && listing.imageUrls && !loading && !error && (
        <Swiper navigation>
          {listing.imageUrls.map((url) => (
            <SwiperSlide key={url}>
              <div
                className="h-[550px]"
                style={{
                  background: `url(${url}) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </main>
  );
}
