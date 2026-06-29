import { mdiSemanticWeb } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SemanticWeb(props: IconComponentProps) {
  return <Icon path={mdiSemanticWeb} {...props} />;
}

export { mdiSemanticWeb as path };
