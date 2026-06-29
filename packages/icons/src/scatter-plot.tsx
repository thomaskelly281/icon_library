import { mdiScatterPlot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScatterPlot(props: IconComponentProps) {
  return <Icon path={mdiScatterPlot} {...props} />;
}

export { mdiScatterPlot as path };
