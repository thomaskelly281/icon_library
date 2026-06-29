import { mdiChartPpf } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartPpf(props: IconComponentProps) {
  return <Icon path={mdiChartPpf} {...props} />;
}

export { mdiChartPpf as path };
