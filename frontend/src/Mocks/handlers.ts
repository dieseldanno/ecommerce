import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:5000/products", () => {
    // Note that you DON'T have to stringify the JSON!

    return HttpResponse.json({
      products: [
        {
          id: 1,
          name: "Gnorman the Traditionalist",
          category: "Outdoor Decor",
          price: 19.99,
          image: "",
          description:
            "A classic gnome who believes in red hats, long beards, and good old-fashioned garden guarding.",
          stock: 50,
        },
        {
          id: 2,
          name: "Hookhand Harry",
          category: "Outdoor Decor",
          price: 25.99,
          image: "",
          description:
            "A fearless fishing gnome who claims to have wrestled a koi fish bare-handed. A must-have for ponds!",
          stock: 30,
        },
      ],
      cart: [],
    });
  }),
];
