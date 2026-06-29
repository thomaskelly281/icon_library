import { mdiBreadSlice } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BreadSlice(props: IconComponentProps) {
  return <Icon path={mdiBreadSlice} {...props} />;
}

export { mdiBreadSlice as path };
