import React, { Component, SFC } from "react";
import { DateTime } from "luxon";
import styled, { css } from "styled-components";
import { generateFilledCalendar } from "./getMonthDate";
import { gridDebug } from "components/grid/debug";

type CalendarProps = {
  year: number;
  month: number;
};

const colorCss = css<any>`
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ bgColor }) => bgColor};
`;

const size = "3em";
const DayItem: any = styled.div`
  text-align: center;
  vertical-align: middle;
  height: ${size};
  line-height: ${size};
  font-size: 1em;
  width: ${size};
  border-radius: 50%;
  ${colorCss};
`;

export const CalendarGrid = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-columns: max-content;
  grid-auto-rows: max-content;
  grid-column-gap: 1.5em;
  grid-row-gap: 1em;
  padding: 1.5em;
`;

export const Container = styled.div`
  background: #f4f4ed;
  width: fit-content;
`;
export const Month = styled.div`
  font-weight: bold;
  padding: 1em;
`;

const getFontColor = (date: DateTime) => {
  switch (date.weekday) {
    case 7:
    case 6:
      return "#fff";
    default:
      return "#160f01";
  }
};
const getBgColor = (date: DateTime) => {
  switch (date.weekday) {
    case 7:
      return "#f7481d";
    case 6:
      return "#1daaf7";
    default:
      return "#f7ab1d";
  }
};

const Dummy = styled(DayItem)`
  ${gridDebug};
`;

// @ts-ignore;
const Day: SFC<{ date: DateTime }> = ({ date }) => {
  if (!date) {
    return null;
  }

  return (
    <DayItem fontColor={getFontColor(date)} bgColor={getBgColor(date)}>
      {date.day}
    </DayItem>
  );
};

// console.log(
//   JSON.stringify(
//     generateFilledCalendar(year, month).map((item) => {
//       return item.map((item) => {
//         return !item ? item : `${item.day}`;
//       });
//     }),
//     null
//   )
// );

const generateCalendar = (year, month) => {
  return generateFilledCalendar(year, month).reduce((curr, item) => {
    return [...curr, ...item];
  }, []);
};

// generateFilledCalendarは↓こんな感じで配列返すみたいなもの
// [
//   null, null, null, null, null, "1", "2",
//   "3", "4", "5", "6", "7", "8", "9",
//   "10", "11", "12", "13", "14", "15", "16",
//   "17", "18", "19", "20", "21", "22", "23",
//   "24", "25", "26", "27", "28", "29", "30",
//   "31", null, null, null, null, null, null
// ]
const Days = ({ year, month }) => {
  return (
    <>
      {generateCalendar(year, month).map((date, i) => {
        return (
          <div key={i}>
            <Day date={date} />
          </div>
        );
      })}
    </>
  );
};

const WeekdayItem = styled.div`
  text-align: center;
  color: #160f01;
  font-size: 0.8em;
`;
const WeekdaysHeader = () => {
  return (
    <>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((weekday) => {
        return <WeekdayItem>{weekday}</WeekdayItem>;
      })}
    </>
  );
};

export class Calendar extends Component<CalendarProps, CalendarProps> {
  constructor(props) {
    super(props);
    this.state = { year: this.props.year, month: this.props.month };
  }
  handlePrev = () => {
    const prev = DateTime.local(this.state.year, this.state.month).minus({
      months: 1
    });
    this.setState({
      year: prev.year,
      month: prev.month
    });
  };
  handleNext = () => {
    const next = DateTime.local(this.state.year, this.state.month).plus({
      months: 1
    });
    this.setState({
      year: next.year,
      month: next.month
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handlePrev}>prev</button>
        <button onClick={this.handleNext}>next</button>
        <Container>
          <Month>
            {this.state.year}/{this.state.month}
          </Month>
          <CalendarGrid>
            <WeekdaysHeader />
            <Days {...this.state} />
          </CalendarGrid>
        </Container>
      </div>
    );
  }
}
