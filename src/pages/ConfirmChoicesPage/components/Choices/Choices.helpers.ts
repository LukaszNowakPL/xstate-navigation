export const getTransportationTypeName = (transportationType: string) => {
  switch (transportationType) {
    case "air":
      return "Aircraft";
    case "mass":
      return "Train / Bus";
    case "car":
      return "Private car";
  }
};
