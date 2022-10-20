import React, { ReactElement } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { css } from "@emotion/react";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";

interface CustomCardProps {
  title?: string;
  actions?: ReactElement;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  children,
  title,
  actions
}) => {
  return (
    <Box css={cardWrapper}>
      <Card>
        {title && <CardHeader title={title} />}
        <CardContent>{children}</CardContent>
        {actions && <CardActions>{actions}</CardActions>}
      </Card>
    </Box>
  );
};

const cardWrapper = css({
  marginBottom: "1rem"
});
