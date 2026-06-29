import { mdiHomeLightningBolt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeLightningBolt(props: IconComponentProps) {
  return <Icon path={mdiHomeLightningBolt} {...props} />;
}

export { mdiHomeLightningBolt as path };
