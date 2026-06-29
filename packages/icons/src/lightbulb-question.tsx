import { mdiLightbulbQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightbulbQuestion(props: IconComponentProps) {
  return <Icon path={mdiLightbulbQuestion} {...props} />;
}

export { mdiLightbulbQuestion as path };
