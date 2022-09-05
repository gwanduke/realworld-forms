import {
  AppBar,
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle, ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import { css } from "@emotion/css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { atom, useAtom } from "jotai";
import { Transitions } from "./transitions";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
const pageAtom = atom(1);

const AppBarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            size="medium"
            color="inherit"
            onClick={() => {
              // TODO:
            }}
          >
            <ArrowBack />
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
              <HomeOutlinedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      style={{
        fontSize: 23,
        color: "#111111",
      }}
    >
      {children}
    </h1>
  );
};

const Caption = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      style={{
        fontSize: 13,
        color: "#8d8e90",
      }}
    >
      {children}
    </span>
  );
};

const Inner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        padding: "0 24px",
      }}
    >
      {children}
    </div>
  );
};

const Page1 = () => {
  const [_, setPage] = useAtom(pageAtom);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goNextPage = () => {
    navigate("/traveler-insurance/b");
  };

  return (
    <AppBarLayout>
      <article
        style={{
          marginTop: 60,
          paddingBottom: 100,
        }}
      >
        <Inner>
          <Title>
            가입유형 선택 후 <br />
            정보를 입력해주세요
          </Title>

          <Caption>
            만 79세까지 가입이 가능하며 만 19세 미만은 친권자 전자서명이
            필요해요.
          </Caption>

          <Stack
            spacing={2}
            style={{
              marginTop: 60,
            }}
          >
            <FormControl
              fullWidth
              focused={isOpen}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <InputLabel id="성별">Age</InputLabel>
              <Select labelId="성별" label="성별" placeholder="선택" readOnly />
            </FormControl>

            <TextField
              id="생년월일"
              label="생년월일 8자리"
              variant="outlined"
              onChange={(e) => {
                const value = e.target.value;
                if (value.length === 8) {
                  e.target.blur();
                  setIsOpen(true);
                }
              }}
            />

            <FormControl>
              <FormLabel id="가입유형">가입 유형</FormLabel>
              <RadioGroup aria-labelledby="가입유형" name="radio-buttons-group">
                <FormControlLabel
                  value="개인"
                  control={<Radio />}
                  label="개인"
                />
                <FormControlLabel
                  value="단체"
                  control={<Radio />}
                  label="단체"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
        </Inner>

        <hr
          style={{
            margin: "40px 0",
            border: "0",
            height: "10px",
            background: "#f3f4f6",
          }}
        />

        <Inner>
          <span
            style={{
              fontSize: "13px",
              color: "#2c7fdf",
              lineHeight: 1.3,
              verticalAlign: "bottom",
            }}
          >
            해외의료비, 휴대품손해 보장까지, 3분이면 가입 OK
          </span>

          <div
            style={{
              marginTop: "10px",
              fontSize: "20px",
              lineHeight: 1.4,
            }}
          >
            다이렉트라서 쉽게,
            <br />
            보험료는 41.7%할인!
            <div
              style={{
                fontSize: "12px",
                color: "#545557",
                fontWeight: 500,
                marginTop: "5px",
              }}
            >
              (자사 오프라인 대비)
            </div>
          </div>

          <div
            style={{
              marginTop: "10px",
              fontSize: "20px",
              lineHeight: 1.4,
            }}
          >
            해외여행보험 특징
          </div>

          <div
            style={{
              paddingTop: 32,
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  width: 96,
                  height: 96,
                  marginRight: 24,
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <dl>
                <dt
                  style={{
                    fontSize: 16,
                    color: "#111111",
                    fontWeight: "bold",
                  }}
                >
                  해외의료비, 휴대품손해 보장
                  <br />
                  으로 해외에서도 든든하게
                </dt>
                <dd
                  style={{
                    fontSize: 14,
                    color: "#545557",
                    marginTop: 5,
                    fontWeight: "normal",
                  }}
                >
                  해외여행 중 발생한 진찰, 수술, 입원비 등 해외의료비와
                  휴대품손해 (분실제외)를 보장합니다.
                </dd>
              </dl>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 32,
              }}
            >
              <div
                style={{
                  width: 96,
                  height: 96,
                  marginRight: 24,
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <dl>
                <dt
                  style={{
                    fontSize: 16,
                    color: "#111111",
                    fontWeight: "bold",
                  }}
                >
                  해외의료비, 휴대품손해 보장
                  <br />
                  으로 해외에서도 든든하게
                </dt>
                <dd
                  style={{
                    fontSize: 14,
                    color: "#545557",
                    marginTop: 5,
                    fontWeight: "normal",
                  }}
                >
                  해외여행 중 발생한 진찰, 수술, 입원비 등 해외의료비와
                  휴대품손해 (분실제외)를 보장합니다.
                </dd>
              </dl>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 32,
              }}
            >
              <div
                style={{
                  width: 96,
                  height: 96,
                  marginRight: 24,
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <dl>
                <dt
                  style={{
                    fontSize: 16,
                    color: "#111111",
                    fontWeight: "bold",
                  }}
                >
                  해외의료비, 휴대품손해 보장
                  <br />
                  으로 해외에서도 든든하게
                </dt>
                <dd
                  style={{
                    fontSize: 14,
                    color: "#545557",
                    marginTop: 5,
                    fontWeight: "normal",
                  }}
                >
                  해외여행 중 발생한 진찰, 수술, 입원비 등 해외의료비와
                  휴대품손해 (분실제외)를 보장합니다.
                </dd>
              </dl>
            </div>
          </div>
        </Inner>

        <Drawer
          anchor="bottom"
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          PaperProps={{
            className: css`
              border-radius: 10px;
              padding: 40px 0 30px;
            `,
          }}
        >
          <Typography variant="h6">성별</Typography>

          <MenuList>
            <MenuItem onClick={goNextPage}>
              <ListItemText>남자</ListItemText>
            </MenuItem>
            <MenuItem onClick={goNextPage}>
              <ListItemText>여자</ListItemText>
            </MenuItem>
          </MenuList>
        </Drawer>

        <div
          className={css`
            display: flex;
            position: fixed;
            z-index: 9999;
            bottom: 0;
            height: 100px;
            width: 100%;
            background-color: #fff;
            align-items: center;
            padding: 0 24px 0 24px;
          `}
        >
          <Button
            style={{
              flexGrow: 1,
              height: 53,
            }}
            variant="contained"
            size="large"
            onClick={goNextPage}
          >
            다음
          </Button>
        </div>
      </article>
    </AppBarLayout>
  );
};

const Page2 = () => {
  return (
    <AppBarLayout>
      <div>adfljlasdjfldsajfljasdlfjkl</div>
    </AppBarLayout>
  );
};

export const TravelerInsuranceA = () => {
  return (
    <Transitions>
      <Page1 />
    </Transitions>
  );
};

export const TravelerInsuranceB = () => {
  return (
    <Transitions>
      <Page2 />
    </Transitions>
  );
};
