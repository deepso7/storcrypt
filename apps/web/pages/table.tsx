import React, { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../store/useStore";
import type { NextPage } from "next";

const table: NextPage = () => {
  const { address } = useStore();
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const { data: userdata } = await axios.request({
        method: "GET",
        url: `https://api.nftport.xyz/v0/accounts/${address}?chain=polygon&contract_address=0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "2e0cc1de-7253-4d3b-80c0-7093ee89fb4c",
        },
      });

      setData(userdata);
    })();
  });

  return (
    <div className="w-3/4 justify-center mx-10 ">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Address</th>
            <th>CID</th>
            <th>Filename</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>

          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>

          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default table;
