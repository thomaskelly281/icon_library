import { mdiEmailSealOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailSealOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailSealOutline} {...props} />;
}

export { mdiEmailSealOutline as path };
