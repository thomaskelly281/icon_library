import { mdiMicrosoftExcel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftExcel(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftExcel} {...props} />;
}

export { mdiMicrosoftExcel as path };
