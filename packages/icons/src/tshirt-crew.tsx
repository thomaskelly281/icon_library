import { mdiTshirtCrew } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TshirtCrew(props: IconComponentProps) {
  return <Icon path={mdiTshirtCrew} {...props} />;
}

export { mdiTshirtCrew as path };
