import { mdiCountertop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Countertop(props: IconComponentProps) {
  return <Icon path={mdiCountertop} {...props} />;
}

export { mdiCountertop as path };
