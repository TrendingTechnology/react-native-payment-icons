import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgMastercard = (props: SvgProps) => (
  <Svg
    width={780}
    height={500}
    {...props}
  >
    <Path
      d="M40 0h700c22 0 40 18 40 40v420c0 22-18 40-40 40H40c-22 0-40-18-40-40V40C0 18 18 0 40 0z"
      fill="#16366F"
    />
    <Path
      d="M449 250a179.5 179.5 0 1 1-359 0 179.5 179.5 0 0 1 359 0"
      fill="#D9222A"
    />
    <Path
      d="M510.5 70.5A178.8 178.8 0 0 0 371.9 136H408c5 6 9.6 12.3 13.7 19h-63.6a179 179 0 0 0-10.4 19h84.4c2.8 6.2 5.4 12.5 7.6 19h-99.6c-2 6.2-3.8 12.6-5.2 19h110a180.4 180.4 0 0 1-5.2 95h-99.6c2.2 6.5 4.7 12.8 7.6 19h84.4c-3.1 6.6-6.6 13-10.4 19h-63.6c4.1 6.7 8.7 13 13.7 19H408a179.3 179.3 0 0 1-18.1 19A179.5 179.5 0 1 0 510.5 70.6"
      fill="#EE9F2D"
    />
    <Path d="M666 350a5.8 5.8 0 1 1 11.7 0 5.8 5.8 0 0 1-11.6 0zm5.9 4.5a4.4 4.4 0 0 0 0-8.8c-2.5 0-4.4 2-4.4 4.3 0 2.5 2 4.5 4.4 4.5zm-.8-1.9h-1.2v-5h2.2c.4 0 .9 0 1.3.2s.6.7.6 1.2c0 .6-.3 1.2-.9 1.4l1 2.2h-1.4l-.7-2h-1v2zm0-2.9h1.4c.2-.2.3-.4.3-.7 0-.2-.1-.4-.3-.5-.2-.1-.6 0-.8 0h-.6v1.2zm-443.5-80c-2-.3-3-.3-4.4-.3-11 0-16.6 3.7-16.6 11.2 0 4.6 2.7 7.6 7 7.6 8 0 13.7-7.6 14-18.5zm14.2 33h-16.2l.4-7.7c-5 6-11.5 9-20.4 9-10.6 0-17.8-8.3-17.8-20.3 0-18 12.6-28.5 34.2-28.5 2.2 0 5 .2 8 .5.5-2.4.7-3.5.7-4.8 0-4.9-3.4-6.7-12.5-6.7a64.6 64.6 0 0 0-20.6 3.3l2.7-16.6c9.7-2.9 16-4 23.3-4 16.7 0 25.6 7.6 25.6 21.8 0 3.8-.6 8.5-1.6 14.6-1.7 10.8-5.3 33.7-5.8 39.4zm-62.2 0h-19.5l11.2-70-25 70h-13.2l-1.7-69.6-11.7 69.6h-18.2l15.2-91.1h28l1.7 51 17.1-51h31.2l-15 91m354.9-33c-2-.2-3-.2-4.4-.2-11 0-16.6 3.7-16.6 11.2 0 4.6 2.7 7.6 7 7.6 8 0 13.7-7.6 14-18.5zm14.2 33h-16.2l.4-7.6c-5 6-11.5 9-20.4 9-10.6 0-17.8-8.3-17.8-20.3 0-18 12.6-28.5 34.2-28.5 2.2 0 5 .2 8 .5.5-2.4.7-3.5.7-4.8 0-4.9-3.4-6.7-12.5-6.7a64.7 64.7 0 0 0-20.6 3.3l2.7-16.6c9.7-2.9 16-4 23.3-4 16.7 0 25.6 7.6 25.6 21.8 0 3.8-.6 8.5-1.6 14.6-1.7 10.8-5.3 33.7-5.8 39.4zm-220.4-1a44.5 44.5 0 0 1-14 2.3c-10 0-15.4-5.7-15.4-16.2-.2-3.3 1.4-12 2.6-19.8l8.5-50.5h19.4l-2.3 11.2H339l-2.6 17.8h-11.8c-2.2 14-5.4 31.6-5.5 34 0 3.8 2 5.4 6.7 5.4 2.2 0 4-.2 5.3-.7l-2.6 16.4m59.4-.6c-6.7 2-13.1 3-20 3-21.6 0-32.9-11.3-32.9-33 0-25.3 14.4-44 33.9-44 16 0 26.2 10.5 26.2 26.8 0 5.5-.7 10.8-2.4 18.3H354c-1.3 10.7 5.6 15.2 16.8 15.2 7 0 13.2-1.5 20.2-4.7l-3.2 18.4zm-11-43.9c.2-1.5 2.1-13.2-9-13.2-6.1 0-10.5 4.7-12.3 13.2H377zm-123.3-5c0 9.4 4.5 15.8 14.8 20.7 7.9 3.7 9.1 4.8 9.1 8.2 0 4.6-3.5 6.7-11.2 6.7-5.8 0-11.2-1-17.4-3l-2.7 17.1c4.4 1 8.4 1.9 20.3 2.2 20.5 0 30-7.8 30-24.7 0-10.2-4-16.2-13.7-20.7-8.2-3.7-9.1-4.5-9.1-8 0-4 3.2-6 9.5-6 3.8 0 9 .4 14 1l2.8-17.1c-5-.8-12.7-1.5-17.2-1.5-21.8 0-29.3 11.4-29.2 25.1m229-23.1c5.5 0 10.5 1.4 17.5 5l3.2-19.8c-2.9-1.2-13-7.7-21.5-7.7-13 0-24 6.4-31.8 17.1-11.3-3.7-16 3.8-21.6 11.4l-5.1 1.1c.4-2.4.7-4.9.6-7.4H406c-2.4 23-6.8 46.1-10.2 69l-.8 5h19.5c3.2-21 5-34.6 6-43.8l7.4-4c1.1-4.2 4.5-5.5 11.4-5.4-.9 5-1.4 10.1-1.3 15.2 0 24.2 13 39.3 34 39.3 5.4 0 10-.7 17.2-2.6l3.5-20.8a37.9 37.9 0 0 1-16.6 4.7c-11.3 0-18.2-8.4-18.2-22.2 0-20 10.2-34.1 24.8-34.1" />
    <Path
      d="M185.2 297.2h-19.5l11.2-70-25 70h-13.2l-1.7-69.5-11.7 69.5h-18.2l15.2-91h28l.8 56.4 19-56.4h30.2l-15 91"
      fill="#fff"
    />
    <Path d="m647.5 211.6-4.3 26.3c-5.3-7-11-12-18.6-12-9.8 0-18.8 7.4-24.7 18.3-8.1-1.6-16.5-4.5-16.5-4.5.6-6 .9-9.8.8-11.1h-17.9c-2.4 23-6.8 46.1-10.1 69l-1 5h19.5c2.7-17 4.7-31.2 6.2-42.5 6.6-6 10-11.3 16.7-11-3 7.3-4.7 15.6-4.7 24.1 0 18.5 9.3 30.7 23.5 30.7a23 23 0 0 0 18-8.1l-1 6.8H652l14.8-91h-19.2zm-24.4 74c-6.6 0-10-5-10-14.7 0-14.5 6.3-24.8 15.2-24.8 6.7 0 10.3 5 10.3 14.5 0 14.7-6.4 25-15.4 25z" />
    <Path
      d="M233.2 264.3c-2-.3-3-.3-4.4-.3-11 0-16.6 3.7-16.6 11.2 0 4.6 2.7 7.6 7 7.6 8 0 13.7-7.6 14-18.5zm14.2 33h-16.2l.4-7.7c-5 6-11.5 9-20.4 9-10.6 0-17.8-8.3-17.8-20.3 0-18 12.6-28.5 34.2-28.5 2.2 0 5 .2 8 .5.5-2.4.7-3.5.7-4.8 0-4.9-3.4-6.7-12.5-6.7a65 65 0 0 0-20.6 3.3l2.7-16.6c9.7-2.9 16-4 23.3-4 16.7 0 25.6 7.6 25.6 21.8 0 3.8-.6 8.5-1.6 14.6-1.7 10.8-5.3 33.8-5.8 39.3zm261.3-88.6-3.1 19.7c-7-3.5-12-4.9-17.5-4.9-14.5 0-24.7 14-24.7 34.1 0 13.8 6.9 22.2 18.2 22.2 4.8 0 10-1.5 16.5-4.7l-3.4 20.8c-7.2 2-11.8 2.6-17.2 2.6-21 0-34-15-34-39.3 0-32.5 18-55.3 43.8-55.3 8.5 0 18.6 3.6 21.4 4.8m31.5 55.6c-2-.3-3-.3-4.4-.3-11 0-16.6 3.7-16.6 11.2 0 4.6 2.7 7.6 7 7.6 8 0 13.7-7.6 14-18.5zm14.2 33h-16.2l.4-7.7c-5 6-11.5 9-20.4 9-10.6 0-17.8-8.3-17.8-20.3 0-18 12.6-28.5 34.2-28.5 2.2 0 5 .2 8 .5.5-2.4.7-3.5.7-4.8 0-4.9-3.4-6.7-12.5-6.7a65.1 65.1 0 0 0-20.6 3.3l2.7-16.6c9.7-2.9 16-4 23.3-4 16.7 0 25.6 7.6 25.6 21.8a94 94 0 0 1-1.6 14.6c-1.7 10.8-5.3 33.8-5.8 39.3zM334 296a44.6 44.6 0 0 1-14 2.4c-10 0-15.4-5.7-15.4-16.2-.2-3.3 1.4-12 2.7-19.8 1-6.9 8.4-50.5 8.4-50.5h19.4l-2.3 11.2h10L340 241h-10c-2.2 14-5.4 31.6-5.5 34 0 3.8 2 5.4 6.7 5.4 2.2 0 4-.2 5.3-.7l-2.6 16.4m59.4-.6c-6.7 2-13.1 3-20 3-21.6 0-32.9-11.3-32.9-33 0-25.3 14.4-44 33.9-44 16 0 26.2 10.5 26.2 26.8 0 5.5-.7 10.8-2.4 18.3h-38.6c-1.3 10.7 5.6 15.2 16.9 15.2 6.9 0 13.1-1.5 20-4.7l-3.1 18.4zm-11-43.9c.2-1.5 2.1-13.2-9-13.2-6.1 0-10.5 4.7-12.3 13.2h21.4zm-123.3-5c0 9.4 4.5 15.8 14.8 20.7 7.9 3.7 9.1 4.8 9.1 8.2 0 4.6-3.5 6.7-11.2 6.7a55 55 0 0 1-17.4-3l-2.7 17.1c4.4 1 8.4 1.9 20.3 2.2 20.5 0 30-7.8 30-24.7 0-10.2-4-16.2-13.7-20.7-8.2-3.7-9.1-4.5-9.1-8 0-4 3.2-6 9.5-6 3.8 0 9 .4 14 1l2.8-17.1a132 132 0 0 0-17.2-1.5c-21.8 0-29.3 11.4-29.2 25.1m398.4 50.6H639l.9-6.8a23 23 0 0 1-18 8.1c-14.1 0-23.5-12.2-23.5-30.7 0-24.6 14.5-45.4 31.7-45.4 7.6 0 13.3 3.1 18.6 10.1l4.3-26.3h19.3l-14.9 91zm-28.7-17c9 0 15.4-10.3 15.4-25 0-9.4-3.6-14.5-10.3-14.5-8.8 0-15.1 10.3-15.1 24.8 0 9.7 3.3 14.6 10 14.6zm-56.9-57c-2.4 23-6.8 46.1-10.1 69l-1 5h19.6c7-45.2 8.6-54 19.5-53 1.8-9.2 5-17.3 7.4-21.4-8.1-1.7-12.7 2.9-18.6 11.6.4-3.8 1.3-7.4 1.1-11.2H572m-160.4 0c-2.4 23-6.8 46.1-10.2 69l-.9 5H420c7-45.2 8.7-54 19.6-53 1.8-9.2 5-17.3 7.4-21.4-8.1-1.7-12.7 2.9-18.7 11.6.5-3.8 1.4-7.4 1.2-11.2h-17.9m254.6 68.2a5.8 5.8 0 1 1 11.6 0 5.8 5.8 0 0 1-11.6 0zm5.8 4.5a4.4 4.4 0 0 0 0-8.8 4.4 4.4 0 0 0 0 8.8zm-.8-2H670v-5h2.2c.4 0 .9 0 1.2.3.5.2.7.7.7 1.2 0 .6-.3 1.1-.9 1.3l1 2.3h-1.4l-.7-2h-1v2zm0-2.8h.6l.8-.1c.2-.1.3-.4.3-.6 0-.2-.2-.4-.3-.5-.2-.1-.6 0-.8 0h-.6v1.2z"
      fill="#fff"
    />
  </Svg>
);

export default SvgMastercard;
