export const shouldNotForwardProps =
  (props: PropertyKey[]) =>
  (prop: PropertyKey): boolean =>
    !props.includes(prop);
