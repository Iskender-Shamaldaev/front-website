import React from "react";
import {useGetFootersQuery} from "@/services/footer.services";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { data, isLoading } = useGetFootersQuery();

  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="text-center font-normal text-gray-700">
            &copy; {CURRENT_YEAR} {data?.data[0]?.attributes?.companyName}
          </p>
          <ul className="flex gap-8 items-center">
            {!isLoading &&
              data?.data[0]?.attributes?.footer_links?.data?.map((link: any) => (
                <li key={link.id}>
                  <Link href={link.attributes.href} legacyBehavior>
                    <a className="font-normal text-gray-700 hover:text-gray-900 transition-colors">
                      {link.attributes.link}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
