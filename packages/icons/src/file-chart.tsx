import { mdiFileChart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileChart(props: IconComponentProps) {
  return <Icon path={mdiFileChart} {...props} />;
}

export { mdiFileChart as path };
