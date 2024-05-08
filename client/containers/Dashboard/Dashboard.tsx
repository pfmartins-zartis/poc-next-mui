"use client";
import { ContentWrapper } from "@/client/components/ContentWrapper/ContentWrapper";
import { useUserContext } from "@/client/contexts/user/user";
import { styled } from "@/client/theme/styled";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import { isEmpty } from "lodash";
import Image from "next/image";

const uData = [4e6, 3e6, 2e6, 2.78e6, 1.89e6, 2.39e6, 3.49e6, 2e6, 9e6, 1.6e6];

const pData = [1e6, 2e6, 1e6, 10e6, 5e6, 3e6, 4e6, 1e6, 8e6, 6e6];
const xLabels = [
  "1/1/2024",
  "2/1/2024",
  "3/1/2024",
  "4/1/2024",
  "5/1/2024",
  "6/1/2024",
  "7/1/2024",
  "8/1/2024",
  "9/1/2024",
  "10/1/2024",
];

const spots = [
  {
    title: "The Ease Specialist: Wormhole Edition",
    impressions: 616643061,
    airings: 2028,
    eqAirings: 2028,
    thumbnail: "https://dueshe9nqxhg.cloudfront.net/ad/5zJ_/default.jpg",
    primeAirigns: 310,
    spend: 16136069,
    spendSOV: 0.0903,
  },
  {
    title: "The Ease Specialist: Mystery",
    impressions: 550836314,
    airings: 2185,
    eqAirings: 2185,
    thumbnail: "https://dueshe9nqxhg.cloudfront.net/ad/5HxH/default.jpg",
    primeAirigns: 317,
    spend: 12152927,
    spendSOV: 0.068,
  },
  {
    title: "His Secret",
    impressions: 482155004,
    airings: 1676,
    eqAirings: 1676,
    thumbnail: "https://dueshe9nqxhg.cloudfront.net/ad/6wuU/default.jpg",
    primeAirigns: 346,
    spend: 15885393,
    spendSOV: 0.0889,
  },
  {
    title: "Ease Specialist: Pep Talk",
    impressions: 374302096,
    airings: 1355,
    eqAirings: 1355,
    thumbnail: "https://dueshe9nqxhg.cloudfront.net/ad/5z2P/default.jpg",
    primeAirigns: 198,
    spend: 11188149,
    spendSOV: 0.0626,
  },
  {
    title: "The Caveman Returns: The Nightmare",
    impressions: 357633160,
    airings: 197,
    eqAirings: 200,
    thumbnail: "https://dueshe9nqxhg.cloudfront.net/ad/58Zy/default.jpg",
    primeAirigns: 39,
    spend: 19314382,
    spendSOV: 0.1081,
  },
  {
    title: "March Madness: However You Fan",
    impressions: 347541277,
    airings: 273,
    eqAirings: 273,
    thumbnail: "https://dueshe9nqxhg.cloudfront.net/ad/66yP/default.jpg",
    primeAirigns: 86,
    spend: 30443401,
    spendSOV: 0.1704,
  },
];
const impressionsByDemographics = [
  {
    label: "P25-54",
    data: 3.5e9,
  },
  {
    label: "P18+",
    data: 7.5e9,
  },
];
const impressionsByType = [
  {
    label: "National Live + Same Day",
    value: 4.7e9,
  },
  {
    label: "National: 3 Day Time-shifted (DVR or VOD)",
    value: 82e6,
  },
  {
    label: "National: 4-7 Day Time-shifted (DVR)",
    value: 33e6,
  },
  {
    label: "National: 8+ Day Time-shifted (DVR)",
    value: 18e6,
  },
  {
    label: "National: Other",
    value: 6e6,
  },
  {
    label: "Local",
    value: 152e6,
  },
  {
    label: "Addressable",
    value: 60e6,
  },
];

const topNetwork = [
  { network: "CBS", impressions: 1266989183 },
  { network: "ABC", impressions: 809117015 },
  { network: "ESPN", impressions: 592677649 },
  { network: "NBC", impressions: 540020192 },
  { network: "FOX", impressions: 344923677 },
];

const topShows = [
  { show: "NFL Football", impressions: 384678920 },
  { show: "2024 NCAA Men's Basketball Tournament", impressions: 969338224 },
  { show: "NHL Hockey", impressions: 199030185 },
  { show: "The NFL Today", impressions: 149059323 },
  { show: "SportsCenter	", impressions: 120079567 },
];

const ThumbnailWrapper = styled("div")`
  position: relative;
  overflow: hidden;
`;

const RankTag = styled(Typography)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
  height: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(6)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-top: ${({ theme }) => theme.spacing(0.7)};
  border-radius: 100px;
`;

export const Dashboard = () => {
  const { user } = useUserContext();
  const subject = user.selectedSubject;
  if (isEmpty(subject)) return null;
  return (
    <Grid
      container
      spacing={2}
      ml={4}
      mr={4}
      width="unset"
      xs={12}
      alignItems="stretch"
      height="100vh"
      overflow="auto"
    >
      <Grid xs={12} md={6} lg={4} item>
        <ContentWrapper bgVariant="gradient" gradientIndex={0} elevation={0}>
          <Typography variant="body1" component="h2">
            Impressions
          </Typography>
          <Typography color="inherit" variant="h4" component="div">
            {(subject?.overview?.impressions ?? 0).toLocaleString(
              navigator.language,
            )}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            fontWeight={100}
            color="grey.200"
          >
            Impressions SOV{" "}
            {(subject?.overview?.impressionsSOV ?? 0).toLocaleString(
              navigator.language,
              { style: "percent" },
            )}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            fontWeight={100}
            color="grey.200"
          >
            P18+ Impressions: , airings:
            {(subject?.overview?.impressions18 ?? 0).toLocaleString(
              navigator.language,
              { style: "currency", currency: "USD", currencyDisplay: "symbol" },
            )}
          </Typography>
        </ContentWrapper>
      </Grid>

      <Grid xs={12} md={6} lg={4} item>
        <ContentWrapper bgVariant="gradient" gradientIndex={1} elevation={0}>
          <Typography variant="body1" component="h2">
            Attention Index
          </Typography>
          <Typography color="inherit" variant="h4" component="div">
            {(subject?.overview?.attentionIndex ?? 0).toLocaleString(
              navigator.language,
            )}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            fontWeight={100}
            color="grey.200"
          >
            Interruption Rate:{" "}
            {(subject?.overview?.interruptionRate ?? 0).toLocaleString(
              navigator.language,
            )}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            fontWeight={100}
            color="grey.200"
          >
            Industry Avarage:{" "}
            {(subject?.overview?.industryAverage ?? 0).toLocaleString(
              navigator.language,
              { style: "percent" },
            )}
          </Typography>
        </ContentWrapper>
      </Grid>

      <Grid xs={12} md={12} lg={4} item height="auto">
        <ContentWrapper bgVariant="gradient" gradientIndex={2} elevation={0}>
          <Typography variant="body1" component="h2">
            Est. National TV Spend
          </Typography>
          <Typography color="inherit" variant="h4" component="div">
            {(subject?.overview?.spend ?? 0).toLocaleString(
              navigator.language,
              { style: "currency", currency: "USD", currencyDisplay: "symbol" },
            )}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            fontWeight={100}
            color="grey.200"
          >
            Airings:{" "}
            {(subject?.overview?.airings ?? 0).toLocaleString(
              navigator.language,
            )}
          </Typography>
        </ContentWrapper>
      </Grid>
      <Grid xs={12} item>
        <ContentWrapper variant="outlined" bgVariant="solid">
          <Grid container width="unset" spacing={2} columns={1}>
            <Grid item xs={1}>
              <Typography variant="body1" component="h2">
                Media Measurement by Date
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Grid container spacing={2}>
                <Grid item>
                  <FormControl>
                    <Select value={"NationalLinearImpressions"}>
                      <MenuItem value="NationalLinearImpressions">
                        National Linear Impressions
                      </MenuItem>
                      <MenuItem value="Impressions">Impressions</MenuItem>
                      <MenuItem value="AttentionIndex">
                        Attention Index
                      </MenuItem>
                      <MenuItem value="InterruptionRate">
                        Interruption Rate
                      </MenuItem>
                      <MenuItem value="Airings">Airings</MenuItem>
                      <MenuItem value="EqUnits">Equiv. Units</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item alignItems="center" display="flex">
                  <Typography fontSize="body2">Vs. </Typography>
                </Grid>
                <Grid item>
                  <FormControl>
                    <Select value={"impressions"}>
                      <MenuItem value="impressions">Impressions</MenuItem>
                      <MenuItem value="attentionIndex">
                        Attention Index
                      </MenuItem>
                      <MenuItem value="interruptionRate">
                        Interruption Rate
                      </MenuItem>
                      <MenuItem value="airings">Airings</MenuItem>
                      <MenuItem value="estNationalTvSpend">
                        Est. National TV Spend
                      </MenuItem>
                      <MenuItem value="equivUnits">Equiv. Units</MenuItem>
                      <MenuItem value="none">-- none --</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <LineChart
                height={300}
                series={[
                  { data: pData, label: "National Linear Impressions" },
                  { data: uData, label: "Impressions" },
                ]}
                slotProps={{
                  legend: {
                    labelStyle: { fontSize: 10 },
                    itemMarkHeight: 14,
                    itemMarkWidth: 14,
                    itemGap: 10,
                  },
                }}
                xAxis={[{ scaleType: "point", data: xLabels }]}
                yAxis={[
                  {
                    scaleType: "linear",
                    valueFormatter: (v: number) =>
                      `${(v / 1e6).toLocaleString(navigator.language, { maximumFractionDigits: 0 })}M`,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </ContentWrapper>
      </Grid>
      <Grid xs={12} item>
        <ContentWrapper bgVariant="solid">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" component="h2">
                Top Spots
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <Select value={"impressions"}>
                  <MenuItem value="impressions">Impressions</MenuItem>
                  <MenuItem value="attentionIndex">Attention Index</MenuItem>
                  <MenuItem value="interruptionRate">
                    Interruption Rate
                  </MenuItem>
                  <MenuItem value="creativeWear"> Creative Wear</MenuItem>
                  <MenuItem value="airings"> Airings</MenuItem>
                  <MenuItem value="primetimeAirings">
                    Primetime Airings
                  </MenuItem>
                  <MenuItem value="estNationalTvSpend">
                    Est. National TV Spend
                  </MenuItem>
                  <MenuItem value="equivUnits">Equiv. Units</MenuItem>
                  <MenuItem value="spendSov">Spend SOV</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item container columns={{ xs: 1, md: 3, lg: 6 }} spacing={2}>
              {spots
                .sort((a, b) => (a.impressions > b.impressions ? 1 : -1))
                .map((spot, index) => (
                  <Grid item key={spot.title} xs={1}>
                    <ThumbnailWrapper>
                      <Image
                        src={spot.thumbnail}
                        height={90}
                        width={160}
                        layout="responsive"
                        alt="thumbnail"
                      />
                      <RankTag variant="caption">#{index + 1}</RankTag>
                    </ThumbnailWrapper>
                    <Button variant="text" color="secondary" size="small">
                      {spot.title}
                    </Button>
                    <Typography color="grey.400" component="span" variant="h4">
                      {spot.impressions.toLocaleString(navigator.language)}
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </ContentWrapper>
      </Grid>
      <Grid item xs={12} md={6}>
        <ContentWrapper bgVariant="solid">
          <Typography variant="body1" component="h2">
            Impressions by Target Demographic
          </Typography>
          <BarChart
            series={impressionsByDemographics.map(({ data, label }) => ({
              data: [data],
              label: label,
              id: data,
            }))}
            height={300}
            slotProps={{
              legend: {
                labelStyle: { fontSize: 10 },
                itemMarkHeight: 14,
                itemMarkWidth: 14,
                itemGap: 10,
              },
            }}
            grid={{ horizontal: true }}
            yAxis={[
              {
                scaleType: "linear",
                valueFormatter: (v: number) =>
                  `${(v / 1e9).toLocaleString(navigator.language, { maximumFractionDigits: 0 })}B`,
              },
            ]}
            xAxis={[
              {
                scaleType: "band",
                data: [""],
              },
            ]}
          />
        </ContentWrapper>
      </Grid>
      <Grid item xs={12} md={6}>
        <ContentWrapper bgVariant="solid">
          <Typography variant="body1" component="h2">
            Impressions By Type
          </Typography>
          <PieChart
            series={[
              {
                data: impressionsByType.map(({ value, label }) => ({
                  value,
                  label,
                  id: value,
                })),
              },
            ]}
            height={300}
            slotProps={{
              legend: {
                labelStyle: {
                  fontSize: 10,
                  width: 60,
                  overflow: "ellipsis",
                  lineBreak: "auto",
                },
                itemMarkHeight: 14,
                itemMarkWidth: 14,
                itemGap: 10,
              },
            }}
          />
        </ContentWrapper>
      </Grid>
      <Grid item xs={12} md={6}>
        <ContentWrapper bgVariant="solid">
          <Typography variant="body1" component="h2">
            Top Networks
          </Typography>
          <Table>
            <TableBody>
              {topNetwork.map((row) => (
                <TableRow key={row.network}>
                  <TableCell component="th" scope="row">
                    <Typography color="secondary" component="span">
                      {row.network}
                    </Typography>
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {row.impressions}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ContentWrapper>
      </Grid>

      <Grid item xs={12} md={6}>
        <ContentWrapper bgVariant="solid">
          <Typography variant="body1" component="h2">
            Top Shows
          </Typography>
          <Table>
            <TableBody>
              {topShows.map((row) => (
                <TableRow key={row.show}>
                  <TableCell component="th" scope="row">
                    <Typography color="secondary" component="span">
                      {row.show}
                    </Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.impressions}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ContentWrapper>
      </Grid>
    </Grid>
  );
};
