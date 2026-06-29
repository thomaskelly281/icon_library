import { mdiTooltipAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipAccount(props: IconComponentProps) {
  return <Icon path={mdiTooltipAccount} {...props} />;
}

export { mdiTooltipAccount as path };
