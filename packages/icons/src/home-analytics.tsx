import { mdiHomeAnalytics } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeAnalytics(props: IconComponentProps) {
  return <Icon path={mdiHomeAnalytics} {...props} />;
}

export { mdiHomeAnalytics as path };
