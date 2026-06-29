import { mdiTrendingUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrendingUp(props: IconComponentProps) {
  return <Icon path={mdiTrendingUp} {...props} />;
}

export { mdiTrendingUp as path };
