import { mdiPolo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Polo(props: IconComponentProps) {
  return <Icon path={mdiPolo} {...props} />;
}

export { mdiPolo as path };
