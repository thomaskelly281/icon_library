import { mdiFileChartCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileChartCheck(props: IconComponentProps) {
  return <Icon path={mdiFileChartCheck} {...props} />;
}

export { mdiFileChartCheck as path };
