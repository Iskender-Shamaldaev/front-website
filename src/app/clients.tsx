"use client"
import {useGetClientsQuery} from "@/services/client.services";

export function Clients() {
  const {data, isLoading} = useGetClientsQuery();

  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <h6
          className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-8">
        {data?.data[0]?.attributes?.title}
      </h6>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {isLoading === false &&
          data?.data[0]?.attributes?.client_imgs?.data?.map((client: any) => (
              <div key={client.id} className="w-40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${client?.attributes?.image?.data?.attributes?.url}`}
                  alt="Client Logo"
                  width={512}
                  height={512}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
