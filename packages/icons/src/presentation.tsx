import { mdiPresentation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Presentation(props: IconComponentProps) {
  return <Icon path={mdiPresentation} {...props} />;
}

export { mdiPresentation as path };
