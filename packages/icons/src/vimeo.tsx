import { mdiVimeo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Vimeo(props: IconComponentProps) {
  return <Icon path={mdiVimeo} {...props} />;
}

export { mdiVimeo as path };
