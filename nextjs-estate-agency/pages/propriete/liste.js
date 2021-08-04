import React from "react";
import { MDBDataTableV5, MDBIcon, MDBView } from "mdbreact";
import { AdminRoute } from "../../auth/adminRoutes";
import { Layout } from "../../components/layout/layout";
import api from "../../auth/axios";
import useSWR from "swr";
import Moment from "react-moment";
import { priceFormatted } from "../../components/helpers";

const fetcher = (url) => api.get(url).then((res) => res.data);

const PropertyList = () => {
  const { data } = useSWR("/api/properties?limit=50", fetcher);
  const properties = data && data.data;
  const datatable = {
    columns: [
      {
        label: "Titre",
        field: "title",
        sort: "asc",
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
      },
      {
        label: "Prix",
        field: "price",
        sort: "asc",
      },
    ],
    rows:
      properties &&
      properties.map((property) => {
        return {
          title: property.title,
          description: property.description.slice(0, 200),
          price: priceFormatted(property.price),
        };
      }),
  };

  return (
    <Layout>
    <div className="container">
      <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
      barReverse
      />
    </div>
    </Layout>
  );
};

export default AdminRoute(PropertyList);
