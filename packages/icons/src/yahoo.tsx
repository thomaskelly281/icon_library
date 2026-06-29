import { mdiYahoo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Yahoo(props: IconComponentProps) {
  return <Icon path={mdiYahoo} {...props} />;
}

export { mdiYahoo as path };
