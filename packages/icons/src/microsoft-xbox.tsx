import { mdiMicrosoftXbox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftXbox(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftXbox} {...props} />;
}

export { mdiMicrosoftXbox as path };
