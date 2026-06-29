import { mdiScooter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Scooter(props: IconComponentProps) {
  return <Icon path={mdiScooter} {...props} />;
}

export { mdiScooter as path };
