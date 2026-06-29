import { mdiForklift } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Forklift(props: IconComponentProps) {
  return <Icon path={mdiForklift} {...props} />;
}

export { mdiForklift as path };
