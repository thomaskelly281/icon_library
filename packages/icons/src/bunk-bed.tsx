import { mdiBunkBed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BunkBed(props: IconComponentProps) {
  return <Icon path={mdiBunkBed} {...props} />;
}

export { mdiBunkBed as path };
