import { mdiTrendingDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrendingDown(props: IconComponentProps) {
  return <Icon path={mdiTrendingDown} {...props} />;
}

export { mdiTrendingDown as path };
