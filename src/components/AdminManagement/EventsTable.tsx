import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { PaginationDiv } from "../Pagination";
import {
  DetailButton,
  UserTableDiv,
  UserTableElement,
  UserTableItem,
  UserTableTitle,
} from "../../cssJs/userTableCss";
import { Loading, LoadingDiv } from "../../cssJs/publicCss";
import { eventQuery } from "../../api/eventApi";
import { EventType } from "../../types/EventType";
import { getTimeString } from "../../helperFns/timeFn";
import EventShowModel from "./EventShowModel";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const EventsTable = (): JSX.Element => {
  const pageSize = 10;
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState<EventType[] | null>([]);
  const [event, setEvent] = useState<EventType | null>(null);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    (async function anyNameFunction() {
      setLoading(true);
      await getEvents();
      setLoading(false);
    })();
  }, [page]);

  const childrenRef: React.MutableRefObject<{ popUp: () => void }> =
    useRef() as React.MutableRefObject<{ popUp: () => void }>;

  const getEvents = async () => {
    setLoading(true);
    //get all plate
    const events: EventType[] | null = await eventQuery(page, pageSize);
    console.log(events);
    setEvents(events);
    setLoading(false);
  };

  const newPage = async (page: number) => setPage(page);

  const showDetail = (event: EventType) => {
    console.log(event);
    setEvent(event);
    childrenRef.current.popUp();
  };

  const getUsersTable = () =>
    (events as EventType[]).map((event, index) => (
      <UserTableElement key={index}>
        <UserTableItem>{event.name}</UserTableItem>
        <UserTableItem>{getTimeString(event.time)}</UserTableItem>
        <UserTableItem>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={
              <Tooltip id="button-tooltip-2">{event.introduction}</Tooltip>
            }
          >
            <p>{event.introduction.substring(0, 10)}......</p>
          </OverlayTrigger>
        </UserTableItem>
        <UserTableItem>
          <DetailButton onClick={() => showDetail(event)}>details</DetailButton>
        </UserTableItem>
      </UserTableElement>
    ));

  const getTable = () => {
    if (loading) {
      return (
        <LoadingDiv>
          <Loading />
        </LoadingDiv>
      );
    } else {
      return (
        <>
          <UserTableTitle>
            <UserTableItem>
              <h6>Name</h6>
            </UserTableItem>
            <UserTableItem>
              <h6>Time</h6>
            </UserTableItem>
            <UserTableItem>
              <h6>Introduction</h6>
            </UserTableItem>
            <UserTableItem>
              <h6>details</h6>
            </UserTableItem>
          </UserTableTitle>
          {getUsersTable()}
          <PaginationDiv pageSize={pageSize} propFn={newPage} count={2} />
        </>
      );
    }
  };

  return (
    <UserTableDiv>
      {getTable()}
      <EventShowModel childRef={childrenRef} propEvent={event} />
    </UserTableDiv>
  );
};

export default EventsTable;
