import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ThankYouPage: React.FC = () => {
  return (
    <Box>
      <Card>
        <CardHeader title={"Thank you"} />
        <CardContent>
          <Typography variant="body1">
            Your application has been sent successfully.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
