import { mdiSlack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Slack(props: IconComponentProps) {
  return <Icon path={mdiSlack} {...props} />;
}

export { mdiSlack as path };
