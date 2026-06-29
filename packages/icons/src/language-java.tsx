import { mdiLanguageJava } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageJava(props: IconComponentProps) {
  return <Icon path={mdiLanguageJava} {...props} />;
}

export { mdiLanguageJava as path };
