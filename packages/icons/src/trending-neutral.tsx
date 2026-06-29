import { mdiTrendingNeutral } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrendingNeutral(props: IconComponentProps) {
  return <Icon path={mdiTrendingNeutral} {...props} />;
}

export { mdiTrendingNeutral as path };
