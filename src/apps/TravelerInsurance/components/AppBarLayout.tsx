import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { HomeOutlined, ArrowBack } from "@mui/icons-material";

const AppBarLayout = ({
  onClickPrev,
  children,
}: {
  onClickPrev?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton size="medium" color="inherit" onClick={onClickPrev}>
            {onClickPrev && <ArrowBack />}
          </IconButton>
          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              textAlign: "center",
            }}
          >
            다이렉트 여행자보험
          </Typography>
          <div>
            <IconButton
              size="medium"
              color="inherit"
              onClick={() => {
                // TODO:
              }}
            >
              <HomeOutlined />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default AppBarLayout;
