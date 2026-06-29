import { mdiAccountInjuryOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountInjuryOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountInjuryOutline} {...props} />;
}

export { mdiAccountInjuryOutline as path };
