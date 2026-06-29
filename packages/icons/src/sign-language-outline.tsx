import { mdiSignLanguageOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignLanguageOutline(props: IconComponentProps) {
  return <Icon path={mdiSignLanguageOutline} {...props} />;
}

export { mdiSignLanguageOutline as path };
