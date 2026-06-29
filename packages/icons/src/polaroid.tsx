import { mdiPolaroid } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Polaroid(props: IconComponentProps) {
  return <Icon path={mdiPolaroid} {...props} />;
}

export { mdiPolaroid as path };
